import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultsgrid',
  templateUrl: './resultsgrid.component.html',
  styleUrls: ['./resultsgrid.component.css']
})
export class ResultsgridComponent implements OnInit {

  @Input() gridResult:any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("g result",this.gridResult);
  }

  data = `[
    {
		"Text": "RT @ChitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
        "location": "Copperbelt, Zambia",
  	    "followers_count": 3592,
        "created_at": "Mon Jan 09 15:40:46 +0000 2012",
		"utc_offset": null,
		"time_zone": null,
		"geo_enabled": false,
  	"urls":"https://t.co/LsptlnLVUA",
     "hashtags": ""
	},
	{
		"Text": "RT @ChitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
        "location": "Copperbelt, Zambia",
  	    "followers_count": 3592,
        "created_at": "Mon Jan 09 15:40:46 +0000 2012",
		"utc_offset": null,
		"time_zone": null,
		"geo_enabled": false,
  		"urls":"https://t.co/LsptlnLVUA",
        "hashtags":""
	},
	{
		"Text": "RT @ChitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
        "location": "Copperbelt, Zambia",
  	    "followers_count": 3592,
        "created_at": "Mon Jan 09 15:40:46 +0000 2012",
		"utc_offset": null,
		"time_zone": null,
		"geo_enabled": false,
  		"urls":"https://t.co/LsptlnLVUA",
        "hashtags":""
	},
	{
    "Text": "RT @ChitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
    "location": "Copperbelt, Zambia",
    "followers_count": 3592,
    "created_at": "Mon Jan 09 15:40:46 +0000 2012",
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
  "urls":"https://t.co/LsptlnLVUA",
    "hashtags":""
	},
	{
    "Text": "RT @ChitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
    "location": "Copperbelt, Zambia",
    "followers_count": 3592,
    "created_at": "Mon Jan 09 15:40:46 +0000 2012",
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
  "urls":"https://t.co/LsptlnLVUA",
    "hashtags":""
	},
	{
		"Text": "RT @WhitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
        "location": "Copperbelt, Zambia",
  	    "followers_count": 3592,
        "created_at": "Mon Jan 09 15:40:46 +0000 2012",
		"utc_offset": null,
		"time_zone": null,
		"geo_enabled": false,
  		"urls":"https://t.co/LsptlnLVUA",
        "hashtags":""
	},
	{
    "Text": "RT @EhitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
    "location": "Copperbelt, Zambia",
    "followers_count": 3592,
    "created_at": "Mon Jan 09 15:40:46 +0000 2012",
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
  "urls":"https://t.co/LsptlnLVUA",
    "hashtags":""
	},
	{
    "Text": "RT @OhitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
    "location": "Copperbelt, Zambia",
    "followers_count": 3592,
    "created_at": "Mon Jan 09 15:40:46 +0000 2012",
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
  "urls":"https://t.co/LsptlnLVUA",
    "hashtags":""
	},
	{
    "Text": "RT @ThitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
    "location": "Copperbelt, Zambia",
    "followers_count": 3592,
    "created_at": "Mon Jan 09 15:40:46 +0000 2012",
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
  "urls":"https://t.co/LsptlnLVUA",
    "hashtags":""
	},
	{
		"Text": "RT @PhitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
        "location": "Copperbelt, Zambia",
  	    "followers_count": 3592,
        "created_at": "Mon Jan 09 15:40:46 +0000 2012",
		"utc_offset": null,
		"time_zone": null,
		"geo_enabled": false,
  		"urls":"https://t.co/LsptlnLVUA",
        "hashtags":""
	},
	{
    "Text": "RT @BhitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
    "location": "Copperbelt, Zambia",
    "followers_count": 3592,
    "created_at": "Mon Jan 09 15:40:46 +0000 2012",
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
  "urls":"https://t.co/LsptlnLVUA",
    "hashtags":""
	},
	{
    "Text": "RT @AhitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
    "location": "Copperbelt, Zambia",
    "followers_count": 3592,
    "created_at": "Mon Jan 09 15:40:46 +0000 2012",
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
  "urls":"https://t.co/LsptlnLVUA",
    "hashtags":""
	},
	{
    "Text": "RT @AhitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
    "location": "Copperbelt, Zambia",
    "followers_count": 3592,
    "created_at": "Mon Jan 09 15:40:46 +0000 2012",
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
  "urls":"https://t.co/LsptlnLVUA",
    "hashtags":""
	},
	{
		"Text": "RT @MhitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
        "location": "Copperbelt, Zambia",
  	    "followers_count": 3592,
        "created_at": "Mon Jan 09 15:40:46 +0000 2012",
		"utc_offset": null,
		"time_zone": null,
		"geo_enabled": false,
  		"urls":"https://t.co/LsptlnLVUA",
        "hashtags":""
	},
	{
    "Text": "RT @DhitongwaBanda: Necklaces with name tags k15, order in advance. Ivory necklaces K20 and K10 bracelets Our stand is at the University of",
    "location": "Copperbelt, Zambia",
    "followers_count": 3592,
    "created_at": "Mon Jan 09 15:40:46 +0000 2012",
"utc_offset": null,
"time_zone": null,
"geo_enabled": false,
  "urls":"https://t.co/LsptlnLVUA",
    "hashtags":""
  }]`;

  source: any =
    {
      datatype: 'json',
      datafields: [
        { name: 'Text', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'followers_count', type: 'string' },
        { name: 'created_at', type: 'string' },
        { name: 'time_zone', type: 'string' },
        { name: 'urls', type: 'string' },
        { name: 'hashtags', type: 'string' }
      ],
      localdata: this.data,
      sortcolumn: 'Text',
      sortdirection: 'asc'
    };
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '120%';
    }

    return '100%';
  }
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] =
    [
      { text: 'Text', datafield: 'Text' },
      { text: 'Location', datafield: 'location' },
      { text: 'Followers_count', datafield: 'followers_count' },
      { text: 'Created_at', datafield: 'created_at', width: 120 },
      { text: 'Time_zone', datafield: 'time_zone' },
      { text: 'Urls', datafield: 'urls' },
      { text: 'Hashtags', datafield: 'hashtags', width: 120 },

    ];
}
