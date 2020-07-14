var box=new Vue({
el:"#one",
data:{
    query:"",
querylist:[],
MusicUrl:"",
imgUrl:"10.png",
Comments:[],
isPlaying:"false",

},

methods:{
searchlist:function()
{
    var that=this;
    axios.get("https://autumnfish.cn/search?keywords="+this.query).then(function (response) 
    {
that.querylist=response.data.result.songs},function(err) 
  {})
    
},
playlist:function(musicId) 
{ var that=this;
   axios.get("https://autumnfish.cn/song/url?id="+musicId).then(function (response) 
   { that.MusicUrl=response.data.data[0].url},function(err) 
        {})  

   axios.get("https://autumnfish.cn/song/detail?ids="+musicId).then(function (response) {
   that.imgUrl=response.data.songs[0].al.picUrl},function(err) 
        {})  
       
   axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId).then(function (response) {
    console.log(response.data.hotComments);that.Comments=response.data.hotComments},function(err) 
    {})  
},


play:function()
{
    /* console.log("play") */
    this.isPlaying="true"
},
pause:function()
{
    /* console.log("pause") */
    this.isPlaying="false"
}







}


})

