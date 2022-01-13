// Bài 1: Duyệt mảng, tìm số chẵn, hiển thị.
let numBer = [0,2,8,6,1,3,8,5];
let count=0;
for (let i = 0; i < numBer.length; i++) {
    if (numBer[i]%2==0){
        count+=1
    }
}
document.getElementById("kq").innerText= "Số lượng số chẵn trong mảng là " + count;

//Bài 2: đếm số lượng a có trong n phần tử.
let anFa = ["a","b","a","d","u"];
let count1=0;
for (let j=0; j < anFa.length; j++){
    if (anFa[j]==="a"){
        count1+=1
    }
}
document.getElementById("kq1").innerText = "Số lượng phần tử a có trong mảng là " +count1;

// bài 3: Tổng các số nguyên tố trong mảng.
let number = [1,3,5,9,7,5,6,3,2,11]
let total=0;
function kiemtrasonguyento(n) {
    // let n = parseInt(prompt("Xin mời nhập số"));
    let check = true
    for (let i = 2; i <= Math.sqrt(n) ; i++) {
        if(n%i==0){
            check = false
            break;
        }
    }
    return true;
    }

for (let x = 0; x < number.length; x++) {
    if(kiemtrasonguyento(number[x])){
        total+=number[x]
    }
}
document.getElementById("kq3").innerText = total;

// Bài 4.
