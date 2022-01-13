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
    let check = true
    for (let i = 2; i <= Math.sqrt(n) ; i++) {
        if(n%i==0){
            check = false
            break;
        }
    }
    return check;
    }

for (let x = 0; x < number.length; x++) {
    if(kiemtrasonguyento(number[x])){
        total+=number[x]
    }
}
document.getElementById("kq3").innerText = total;

// Bài 4.Tổng các số nguyên tố nhỏ hơn 500. trong 1 mảng cho sẵn.
let number1 = [55,87,94,11,17,5,3,601,599,501,521,503];
let total1 =0;
for (let i = 0; i < number1.length; i++) {
    if(kiemtrasonguyento(number1[i])&& number1[i]<500) {
        total1+=number1[i]
    }
}
document.write(total1 +"<br>");
// bài 4. Tổng các số nguyên tố nhỏ hơn 500.
let total2 = 0;
for (let i = 2; i < 500; i++) {
    if(kiemtrasonguyento(i)){
        total2+=i;
    }
}
document.write(total2);