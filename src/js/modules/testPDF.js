import { jsPDF } from "jspdf";

export const testDPF = () => {
    const btn = document.getElementsByClassName('team__card-hello-btn')[0];

    if (!btn) return
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF('l', 'px');

    let options = {
        callback: () => {
            doc.save("firstTry.pdf")
        },
        width: 1000,
        windowWidth: 1000
    }

    doc.html(document.body, options);

}