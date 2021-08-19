<template>
    <div>
        <section class="section">
            <div class="container-fliud">
                <img alt="Vue logo" class="rounded-circle" src="./../assets/IMG_8947.jpeg"   height="250px" width="200px">
                <h1 style="font-weight: bold;">Michael Jones</h1>
                <hr class="style2">
                <div class= "intro-list">
                  <ul>
                    <li>Software Engineer</li>
                    <li>Student at Syracuse Unviersity</li>
                    <li>Hometown: Boston, MA</li>
                  </ul>
                </div>
                <button type="button" class="btn btn-primary btn-lg"  style="background-color: #ffa07a;">
                  More About Me
                </button>
            </div>
        </section>
        <section class="protfolio">
            <h1>These are some of my recent projects</h1>
            <h3></h3>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 d-flex align-items-stretch">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="./../assets/asp.net.png">
                                    <h2>Nibble</h2>
                                </div>
                                <h5 class="card-subtitle mb-2">⭐Recipe Managemnet Software⭐</h5>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Donec sed odio dui. 
                                  Etiam porta sem malesuada magna mollis euismod. 
                          Nullam id dolor id nibh ultricies vehicula ut id elit. 
                                Morbi leo risus, porta ac consectetur ac,sdsd 
                                    </p>
                          <button type="button" class="btn btn-outline-secondary">
                            More
                            </button>
                                </div>
                            </div>
                            <br>
                    </div>
                    <div class="col-md-4 d-flex align-items-stretch">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="https://i.pinimg.com/originals/4a/70/56/4a70563234301578c158dc142384a1c3.png">
                                    <h2>web project</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. 
                                        Nullam id dolor id nibh ultricies vehicula ut id elit. 
                                        Morbi leo risus, porta ac consectetur sdsdsdsdssdsdsdsdsdsdsdssdsdsdsdsdsdsdsdssdsdsdsdsdsdsdsdsdsdsac, vestibulum at eros. Praesent commodo cursus magna.
                                    </p>
                                    <button type="button" class="btn btn-outline-secondary">More</button>
                                </div>
                            </div>
                        <br>
                    </div>  
                    <div class="col-md-4 d-flex align-items-stretch">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg">
                                <h2>web project</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                    Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. 
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. 
                                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                </p>
                                <button type="button" class="btn btn-outline-secondary">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

    .section{
        padding-top: 4%;
        padding-bottom: 10%;
        font-family: 'Poppins', sans-serif;
        background-color: #464866;
        color:#fff;
        
    }
    .protfolio{
      /*#f48f50*/
        background-color:#ffa07a;
        font-family: 'Poppins', sans-serif;
        padding-top: 9%;
        padding-bottom: 15%;
        /* padding:15% */
    }
    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }
    .card{
      background-color: #464866;
      color:#fff;
    }
    hr.style2 {
      border-top: 3px double #8c8b8b;
      width: 25%;
    }
    .intro-list{
        display: table;
        margin: 0 auto;
        text-align: left;
    }


</style>