import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Newsstyle extends Component {
  constructor(props){
    super(props);


    this.state = { "status": "ok",
     "totalResults": 4,
      "articles":
             [
                { "source": { "id": "news24", "name": "News24" },
       "author": "Lloyd Burnard", "title": "Cricket SA set to announce new Director of Cricket this week", "description": "Cricket South Africa is expecting to confirm the new Director of Cricket by the end of this week.", "url": "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-set-to-announce-new-director-of-cricket-this-week-20220628", "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3475/250e9fa8fd2644ac95986c6fe3f1b7e8.jpg", "publishedAt": "2022-06-28T21:19:59+00:00", "content": "Cricket South Africa (CSA) is expecting to confirm its new Director of Cricket by the end of this week, Sport24 understands.\r\nThe new appointment will then be part of the set-up ahead of the Proteas'… [+1013 chars]"
     },
        {
             "source": { "id": "bbc-sport", "name": "BBC Sport" }, "author": "BBC Sport", "title": "Shane Warne memorial - watch & follow updates", "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.", "url": "http://www.bbc.co.uk/sport/live/cricket/60916236", "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png", "publishedAt": "2022-03-30T08:22:26.498888Z", "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]" 
            },
         {
             "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" }, "author": null, "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com", "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com", "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket", "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg", "publishedAt": "2020-04-27T11:41:47Z", "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]" },
          { "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" }, "author": null, "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com", "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com", "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again", "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg", "publishedAt": "2020-03-30T15:26:05Z", "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]" 
        }] }





    
  }

  render() {
    let {title , description , imageurl , newsUrl ,publishedAt ,author} = this.props;
    return (
      <div>
      <div className="card" style={{width: "22rem" , height : "600px"}}>
  
  <img src={imageurl} className="card-img-top" alt="..." style={{ height : "190px" }}/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text text-dark"><small className="text-muted"> By : {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()} </small></p>
    <a href={newsUrl} className="btn btn-dark">More Than Details</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsstyle
