function calculateLetterGrade(grade) {
    if (grade >= 93) {
        return 'A';
    } else if (grade >= 90 && grade < 93) {
        return 'A-';
    } else if (grade >= 87 && grade < 90) {
        return 'B+';
    } else if (grade >= 83 && grade < 87) {
        return 'B';
    } else if (grade >= 80 && grade < 83) {
        return 'B-';
    } else if (grade >= 77 && grade < 80) {
        return 'C+';
    } else if (grade >= 73 && grade < 77) {
        return 'C';
    } else if (grade >= 70 && grade < 73) {
        return 'C-';
    } else if (grade >= 67 && grade < 70) {
        return 'D+';
    } else if (grade >= 60 && grade < 67) {
        return 'D';
    } else {
        return 'F';
    }
}

function calculate_average() {
    const learning = parseFloat(document.getElementById('learning').value);
    const participation = parseFloat(document.getElementById('participation').value);
    const midtermA = parseFloat(document.getElementById('midtermA').value);
    const midtermB = parseFloat(document.getElementById('midtermB').value);
    const midtermC = parseFloat(document.getElementById('midtermC').value);
    const final = parseFloat(document.getElementById('final').value);
    if (isNaN(learning) || isNaN(participation) ||  
        isNaN(midtermA) || isNaN(midtermB) || isNaN(midtermC) || isNaN(final) ) {
        alert('Please enter valid numbers for all inputs!');
        return;
    }

    const result = (learning / 42 * 25 + participation / 60 
        * 15 + midtermA * 0.15 + midtermB * 0.10 + midtermC * 0.10 + final * 0.25);


    document.getElementById('result_average').innerText = calculateLetterGrade(result);


}



