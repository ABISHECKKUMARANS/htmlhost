function attendence() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        let attend=1
        if(attend)
            resolve("Attendence done");
        else
            reject("Attendence not done");
      },2000); 
    });
  }
  
  function lunch() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        let lun=1
        if(lun)
        {
            resolve("Lunch completed")
        }
        else
        {
            reject("Lunch not completed")
        }
      },2000);
    });
  }
  
  function home() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        let ho=1
        if(ho)
        {
            resolve("Reached home")
        }
        else
        {
            reject("Not reached home")
        }
      },2000); 
    });
  }
  
  async function finalday() {
    try {
      let attend = await attendence();
      console.log(attend);
      let lun = await lunch();
      console.log(lun);
      let ho = await home();
      console.log(ho);
      console.log("Tasks completed!");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  finalday();
  