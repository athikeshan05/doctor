from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

# In-memory storage for doctors, in a production app you would use a database
doctors = {
    'anesthesiology': [],
    'cardiology': [],
    # Add other specialties here as needed
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_doctor', methods=['GET', 'POST'])
def add_doctor():
    if request.method == 'POST':
        # Get the data from the form
        name = request.form['name']
        qualifications = request.form['qualifications']
        position = request.form['position']
        imgSrc = request.form['imgSrc']
        specialty = request.form['specialty']

        # Store the doctor's information in the in-memory storage
        doctor = {
            'name': name,
            'qualifications': qualifications,
            'position': position,
            'imgSrc': imgSrc
        }
        if specialty in doctors:
            doctors[specialty].append(doctor)

        # Redirect to the specialty page after adding the doctor
        return redirect(url_for('specialty_page', specialty=specialty))

    return render_template('add_doctor.html')

@app.route('/<specialty>')
def specialty_page(specialty):
    # Get the list of doctors for the given specialty
    if specialty in doctors:
        specialty_doctors = doctors[specialty]
    else:
        specialty_doctors = []
    
    return render_template(f'{specialty}', doctors=specialty_doctors)

if __name__ == '__main__':
    app.run(debug=True)
