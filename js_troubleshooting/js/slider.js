
/*eslint linebreak-style: ["error", "unix"]*/

//Debug the attached file and make it completely working without any errors.
// Note down each step that you are doing to troubleshoot the issues in a file and push it along with the assignment.

let a = ['1.jpg', '2.jpg', '3.jpg'];
let selectedIndex = 0;

function updateImg(type) {
    if (type === '0') {
        selectedIndex--;
    } 
    else {
        selectedIndex++;
    }
  
    if (selectedIndex < '0') {
        selectedIndex = a.length-1;
    } else if (selectedIndex >=a.length) {
        selectedIndex = 0;
    }
    document.getElementById('img').src ='./images/'+a[selectedIndex];
}
