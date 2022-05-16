import axios from 'axios';

const config = {
    baseURL :process.env.VUE_APP_LAST_FM_API_KEY
}

function fetchChartList() {
   return axios({
        url: `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${baseURL}&format=json`,
    }).then((res) => {
        this.chartData = res.data.tracks.track;
    })

}

export default {
    fetchChartList
}