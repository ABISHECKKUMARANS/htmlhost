function a(fname,b){
    console.log('File '+fname+' is being processed')
    b(fname)
    }
function b(fname){
    console.log('File '+fname+' is being downloaded')
    console.log("Downloaded successfully!")
    }
let fname="CS"
a(fname,b)
