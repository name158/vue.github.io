
var weather=new Vue({
      el:"#weather",
      data:
      {
          city:"" ,
          weatherlist:[]
      },
      methods:
      {
        getweather:function() 
        {
          var that=this;
           axios.get('http://wthrcdn.etouch.cn/weather_mini?city'+this.city).then(function(response)
           {
         //console.log(response);
           that.weatherlist=response.data.data.forecast
           }).catch(function(err){})
        }
      }

    })
