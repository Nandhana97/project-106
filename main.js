function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xpbs2KGw4/modal.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;
var crow=0;
var tiger=0;

function gotResults(error, results) {
    if (error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255) + 1;
        random_number_g= Math.floor(Math.random()*255) + 1;
        random_number_b= Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected voice is of '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected dog-'+ dog + 'Detected cat-' + cat + 'Detected crow-' + crow + 'Detected tiger-'+ tiger;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img=document.getElementById('animalimage');

        if(results[0].label == "dog"){
            img.src='dog.jpg';
            dog = dog+1;
        }
        else if(results[0].label == "cat"){
            img.src='cat.jpg';
            cat= cat+1;
        }
        else if(results[0].label == "crow"){
            img.src='crow.jpg';
            crow= crow+1;
        }
        else if(results[0].label == "tiger"){
            img.src='tiger.jpg';
            tiger= tiger+1;
        }
        else{
            img.src='download.jpg';
        }
   }
}