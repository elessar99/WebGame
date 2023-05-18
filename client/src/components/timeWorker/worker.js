var w;

function startWorker() {
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("worker.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",1000);
}

  // const [sec, setSec] = useState();
  // const [control, setControl] = useState(false);
  // let timeIstanbul;
  

  // function timedCount(){
  //   if (istanbulTime != undefined && sec != undefined) {
  //     const splitSec = istanbulTime.split(": ")[2];
  //     console.log("istanbul time :" + istanbulTime)
  //     console.log("15 splittime  : "+splitSec);
  //     const splitTime = istanbulTime.split(":");
  //     if (sec<9) {
  //       splitTime[2] = "0" + (sec+1);
  //     }else if (sec == 59) {
  //       if (parseInt(splitTime[1]) == 59) {
  //         if (parseInt(splitTime[0]) == 24) {
  //           const splitDate = istanbulDate.split("-");
  //           setIstanbulDate(splitDate[0]+"-"+splitDate[1]+"-"+(parseInt(splitDate[2])+1));
  //           splitTime[0] = "00";
  //         }else{
  //           if (parseInt(splitTime[0])<9) {
  //           splitTime[0] = "0" + (parseInt(splitTime[0])+1);
  //           }else{
  //           splitTime[0] = parseInt(splitTime[0])+1 ;
  //           }
  //         }
  //       }else{
  //         if (parseInt(splitTime[1])<9) {
  //         splitTime[1] = "0" + (parseInt(splitTime[1])+1);
  //         }else{
  //         splitTime[1] = parseInt(splitTime[1])+1 ;
  //         }
  //       }
  //     } else {
  //       splitTime[2] = (sec+1).toString();
  //     }
  //     setIstanbulTime(splitTime[0]+":"+splitTime[1]+":"+splitTime[2])
  //     setTimeout(timedCount, 1999);
  //   }
  // }
  // useEffect(() => {
  //   if (control) {
  //     timedCount();
  //     setControl(false);
  //   }
  // }, [control]);


  // useEffect(() => {
  //   const fetchIstanbulTime = async () => {
  //     try {
  //       const response = await axios.get('https://worldtimeapi.org/api/timezone/Europe/Istanbul');
  //       const { datetime } = response.data;
  //       const splitTime = datetime.split("T")[1].split(":");
  //       setIstanbulDate(datetime.split("T")[0]);
  //       timeIstanbul = splitTime[0]+ " : "+ splitTime[1] + " : "+ splitTime[2].split(".")[0];
  //       setIstanbulTime(timeIstanbul);
  //       setControl(true);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchIstanbulTime();
  // }, []);
