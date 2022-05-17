// import axios from "axios";

// const test  = {
//     get : function() {
//         axios({
//             url: "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=378bda961443f8868e2b26296c97edbf&format=json",
//         }).then((res) => {
//          this.chartData = res.data.tracks.track;
//          console.log("chart.js에서의 this");
//          console.log(this);
//         }).catch((err)=>{
//             alert(err);
//         })
//     }
// }
import axios  from "axios";
export const Test = {
    methods: {
        doTest(){
            axios({
                url: "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=378bda961443f8868e2b26296c97edbf&format=json",
            }).then((res) => {
            return  this.chartData = res.data.tracks.track;
         
            }).catch((err)=>{
                alert(err);
            })
          
        }
    },
}

 