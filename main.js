function preload()
{

}

function setup()
{
canvas=createCanvas(400,400)
canvas.position(500,175)

video=createCapture(VIDEO)
video.size(400,400)
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}

function draw()
{
image(video,0,0,400,350)
}

function umarinate()
{
save("I Have Been Hotrodinated!")
}

function modelLoaded()
{
    console.log("With Great Reluctense I Would Like To Announce That Your Model Has Loaded.")
}


function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
    }
}

























