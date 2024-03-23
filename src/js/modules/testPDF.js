import { jsPDF } from "jspdf";

export const testDPF = () => {
    const btn = document.getElementsByClassName('team__card-hello-btn')[0];

    if (!btn) return
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF();

    doc.setFontSize(25)
    doc.setTextColor('red')
    doc.text("Hello world!", 10, 50);
    doc.setFontSize(18)
    for (let i = 0; i < 5; i++) {
        doc.text('text', 10, 60 + (i * 10));
    }
    console.log(doc);
    btn.addEventListener('click', () => {doc.save("firstTry.pdf")});

    console.log(doc);
}