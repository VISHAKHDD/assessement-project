

 let user_id = "322iscv6dlu5aqiyqt768pbbz";


let playlist_url="https://api.spotify.com/v1/users/"+user_id+"/playlists";
let token = "Bearer BQBYxJxLa5_0tB9ZpL4MXFVL-pYwCjlN6-xNKd5TW6t5L_7T36Tv7CEan0pWqkLSxCIQyhp55WTzdtwA15jcx3joztZyk4bMo72YgM2_Tsuli_Y-PPOVFmpPehFQaj51QHIKaCQL4ZJwxHLflhUdjYDC23GvM0WDSvtKutoYTbM0b9QHaQaOrBOW7gaYynx5frBO2DOo4xnCnGaZlt_qpD5wdDVyBnIyNEXBWwbAig";
document.addEventListener('DOMContentLoaded',function(ev){
    let uri = playlist_url;
    let h =new Headers();
    h.append('Accept','application/json');
    h.append('Authorization','token' + token);
    let req = new Request(uri, {
        method: 'GET',
        headers: h,
        credentials: 'same-origin'
    });

    fetch(req)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error('BAD HTTP !');
        }
    })
    .then( (jsonData)=>{
        let playlists=jsonData;
            
        console.log(JSON.stringify(playlists.items, null, " "));
        var i;
        
              for(i=0;i<playlists.items.length;i++)
              {
                  var playlist_url2 =playlists.items[i].href;
               let uri2 = playlist_url2;
              let req2 = new Request(uri2, {
                  method: 'GET',
                  headers: h,
                  credentials: 'same-origin'
              });
               fetch(req2)
               .then( (response)=>{
                  if (response.ok)
                  {
                      /* var playlist = JSON.parse(response.body);
                   
                          console.log("playlist: " + playlist.name);
                          playlist.tracks.items.forEach(function(track)
                          {
                              console.log(track.track.name);
                          }); */
                          return response.json();
                      }
                      else{
                          throw new Error('BAD HTTP 2!');
                      }
                      })
                      .then((res)=>{
                       
                            let playlist = res;
                         
                                console.log(JSON.stringify(playlist.name, null, " "));
                                          const baseUrl = 'https://open.spotify.com/embed/playlist/'+playlist.id;

$('.playlist2').append(` <li class="card">
      <div class="inside-top"><iframe src="${baseUrl}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> </div>
    </li>`);
                                playlist.tracks.items.forEach(function(track)
                                {
                                    console.log(track.track.name);
                                });
                            
                      })
                      
                   .catch( (err)=>{
                          console.log('ERROR',err.message
                          );
                      })
              }

    })
    .catch( (err)=>{
        console.log('ERRor',err.message
        );
    })

})