function navigateToDoctors(specialty) {
    // Create a mapping of specialties to their respective HTML files
    const specialtyToHtmlMap = {
        'anesthesiology': 'anesthesiology.html',
        'cardiology': 'cardiology.html',
        'dermatology': 'dermatology.html',
        'emergency-medicine': 'emergency-medicine.html',
        'endocrinology': 'endocrinology.html',
        'gastroenterology': 'gastroenterology.html',
        'gynecology': 'gynecology.html',
        'neurology': 'neurology.html',
        'oncology': 'oncology.html',
        'orthopedics': 'orthopedics.html',
        'pediatrics': 'pediatrics.html',
        'psychiatry': 'psychiatry.html',
        'radiology': 'radiology.html',
        'surgery': 'surgery.html',
        'urology': 'urology.html',
        'rheumatology': 'rheumatology.html',
        'nephrology': 'nephrology.html',
        'pulmonology': 'pulmonology.html',
        'infectious-diseases': 'infectious-diseases.html',
        'geriatrics': 'geriatrics.html',
        'sports-medicine': 'sports-medicine.html',
        'pain-medicine': 'pain-medicine.html',
        'family-medicine': 'family-medicine.html',
        'general-surgery': 'general-surgery.html',
        'medical-genetics': 'medical-genetics.html',
        'occupational-medicine': 'occupational-medicine.html',
        'pathology': 'pathology.html',
        'sleep-medicine': 'sleep-medicine.html',
        'preventive-medicine': 'preventive-medicine.html',
        'addiction-medicine': 'addiction-medicine.html',
        'adolescent-medicine': 'adolescent-medicine.html',
        'palliative-care': 'palliative-care.html',
        'interventional-radiology': 'interventional-radiology.html',
        'cardiac-electrophysiology': 'cardiac-electrophysiology.html',
        'pediatric-cardiology': 'pediatric-cardiology.html',
        'maternal-fetal-medicine': 'maternal-fetal-medicine.html',
        'endovascular-surgery': 'endovascular-surgery.html',
        'surgical-oncology': 'surgical-oncology.html',
        'dermatopathology': 'dermatopathology.html',
        'clinical-immunology': 'clinical-immunology.html',
        'transplant-surgery': 'transplant-surgery.html',
        'pediatric-surgery': 'pediatric-surgery.html',
        'bariatric-surgery': 'bariatric-surgery.html',
        'clinical-psychology': 'clinical-psychology.html',
        'nutrition': 'nutrition.html',
        'speech-therapy': 'speech-therapy.html'
    };

    // Check if the specialty exists in the map
    const htmlFile = specialtyToHtmlMap[specialty];
    
    // If it exists, navigate to that HTML file
    if (htmlFile) {
        window.location.href = htmlFile;
    } else {
        console.error('Specialty not found:', specialty);
    }
}

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const name = document.getElementById('doctor-name').value;
    const qualifications = document.getElementById('doctor-qualifications').value;
    const position = document.getElementById('doctor-position').value;
    const imgSrc = document.getElementById('doctor-img').value;
    const specialty = document.getElementById('doctor-specialty').value;

    // Construct the new doctor card HTML
    const doctorCardHTML = `
        <div class="doctor-card">
            <img src="${imgSrc}" alt="${name}">
            <h3>${name}</h3>
            <p>${qualifications}</p>
            <p>${position}</p>
            <button>Know More</button>
        </div>
    `;

    // Navigate to the respective HTML file
    navigateToDoctors(specialty);
    
    // Optionally: After navigating, you can append the doctor card to the HTML file using AJAX
    // (This would typically require a backend to modify the HTML file)

    // Clear the form
    document.getElementById('doctor-form').reset();
}
