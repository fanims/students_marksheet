
function myFunction() {
    let name = document.getElementById('name').value;
    let st_class = document.getElementById('class').value;
    let sub_english = +document.getElementById('english').value;
    let sub_urdu = +document.getElementById('urdu').value;
    let sub_math = +document.getElementById('math').value;
    let sub_is = +document.getElementById('is').value;
    let sub_ps = +document.getElementById('ps').value;
    let totalmarks = sub_english + sub_urdu + sub_math + sub_is + sub_ps;
    
    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('st_name').innerHTML = `${name}`;
    document.getElementById('st_class').innerHTML = `${st_class}`;
    document.getElementById('obtainMarks').innerHTML = `${totalmarks}`;
}