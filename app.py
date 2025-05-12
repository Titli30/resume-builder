# app.py
from flask import Flask, render_template, request, send_file
from werkzeug.utils import secure_filename
import os
from weasyprint import HTML
from jinja2 import Environment, FileSystemLoader

app = Flask(__name__)
UPLOAD_FOLDER = 'static/uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.form.to_dict()
    photo = request.files['photo']
    if photo:
        filename = secure_filename(photo.filename)
        photo_path = os.path.join(UPLOAD_FOLDER, filename)
        photo.save(photo_path)
        data['photo_path'] = photo_path
    else:
        data['photo_path'] = None

    theme = data.get('theme', 'light')
    template_name = data.get('template', 'template1.html')
    
    env = Environment(loader=FileSystemLoader('templates'))
    template = env.get_template(f'{template_name}.html')
    html_out = template.render(**data)

    pdf_path = os.path.join('static', 'resume.pdf')
    HTML(string=html_out).write_pdf(pdf_path)

    return send_file(pdf_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
