const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = 'Ornet Presentation.pdf';
const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('ornet_pdf_text.txt', data.text);
    console.log('PDF text extracted successfully. Number of pages:', data.numpages);
}).catch(function(error){
    console.error('Error parsing PDF:', error);
});
