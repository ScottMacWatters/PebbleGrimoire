/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */


/*
  Set these to configure Script
*/
var membershipType = 2; //1 for XBL, 2 for PSN
var displayName = 'scottmacwatters';



var UI = require('ui');
var ajax = require('ajax');
var accountNumberByDisplayNameUrl = 'https://www.bungie.net/Platform/Destiny/2/Stats/GetMembershipIdByDisplayName/';
var grimoireRestBase = "https://www.bungie.net/Platform/Destiny/Vanguard/Grimoire/";
var grimoireSingleToken = "?definitions=true&single=";
var grimoireIds = {"101005":"0","101010":"45","101020":"45","101030":"45","101060":"5","101080":"5","101100":"5","101110":"5","101120":"0","101130":"0","101140":"0","101145":"0","102010":"0","102020":"0","102030":"0","102040":"5","102050":"5","102060":"10","102070":"5","102100":"5","102130":"15","102140":"5","102150":"5","103010":"15","103020":"0","103030":"5","103040":"5","103050":"10","103090":"0","103094":"0","103100":"5","104010":"15","104020":"5","105010":"15","105020":"10","105040":"15","105060":"15","105080":"10","105085":"5","105090":"5","105092":"5","105094":"5","105096":"5","106020":"15","106030":"5","106040":"15","106050":"10","106060":"15","106070":"5","106080":"5","107010":"5","107020":"15","107030":"10","107040":"5","108005":"5","108010":"5","108020":"10","108030":"5","108040":"10","108050":"5","108060":"10","108070":"0","108075":"0","108080":"0","108090":"0","108100":"0","108110":"0","109010":"0","109020":"0","109040":"5","109050":"0","109054":"5","109058":"5","109060":"0","109070":"0","109080":"0","109100":"0","109110":"0","109120":"0","109130":"0","110010":"5","110012":"15","201010":"20","201020":"5","201060":"10","201063":"10","201070":"10","201090":"20","201110":"20","201120":"20","201130":"20","201140":"20","201150":"5","201154":"5","201158":"10","202010":"10","202020":"10","202030":"10","202130":"5","202140":"5","203010":"20","203020":"5","203030":"5","203040":"10","203044":"10","203060":"10","203065":"10","203070":"10","203090":"10","203110":"10","203115":"10","203120":"20","203130":"20","203140":"20","203150":"20","203160":"20","204010":"10","204020":"10","204030":"10","204040":"10","204120":"5","205010":"20","205020":"5","205030":"5","205050":"10","205060":"10","205070":"10","205080":"10","205110":"20","205120":"20","205130":"20","205140":"20","205150":"20","206010":"10","206020":"10","206030":"10","206040":"10","206100":"5","206110":"5","206120":"5","207010":"20","207020":"5","207030":"5","207034":"5","207038":"10","207050":"10","207060":"10","207070":"10","207080":"10","207090":"10","207100":"20","207120":"20","207130":"20","207140":"20","207150":"20","208010":"10","208020":"10","208030":"10","208040":"10","208050":"10","208060":"10","208070":"10","208110":"5","208112":"5","208114":"5","208116":"5","208120":"5","208130":"5","209010":"5","209020":"5","209030":"5","209050":"10","209060":"15","301005":"0","301010":"5","301020":"0","301030":"0","301040":"0","301050":"0","301060":"0","301063":"0","301067":"0","301070":"0","301073":"0","301077":"0","301080":"0","301083":"0","301087":"0","301090":"0","301093":"0","301097":"0","301100":"0","301103":"0","301107":"0","301110":"0","301113":"0","301117":"0","301120":"0","301130":"0","301140":"0","301150":"0","301160":"0","301170":"0","301180":"0","301190":"0","301200":"0","302010":"20","302020":"0","302030":"0","302035":"0","302037":"0","302040":"0","302050":"20","302055":"0","302060":"0","302070":"20","302080":"0","302090":"20","302095":"0","302100":"0","302110":"5","302120":"5","302130":"5","302150":"0","302160":"5","302170":"5","302180":"5","303010":"20","303020":"0","303030":"0","303034":"0","303040":"20","303050":"0","303060":"0","303065":"0","303070":"20","303080":"0","303090":"0","303092":"0","303093":"0","303200":"20","303210":"0","303220":"0","303310":"0","304010":"20","304020":"0","304030":"0","304032":"0","304040":"20","304050":"0","304060":"0","305020":"0","305030":"0","305040":"0","307020":"0","307030":"0","307040":"0","307050":"0","307060":"0","307070":"0","309030":"10","309040":"10","309050":"15","309060":"15","311010":"10","311020":"5","401010":"5","401020":"5","401030":"15","402010":"5","402020":"20","402030":"5","402040":"5","403010":"5","403020":"15","403030":"0","403040":"5","403050":"10","403060":"0","403070":"5","403080":"10","403090":"0","403100":"5","403110":"10","404010":"5","404020":"20","404030":"5","404040":"5","404050":"5","405010":"5","405020":"20","405030":"5","405040":"5","406010":"5","406020":"20","406030":"5","406040":"5","407010":"5","407020":"5","407025":"5","407027":"5","407028":"5","407029":"5","407030":"5","408010":"5","408020":"5","409010":"5","409020":"5","501010":"15","501040":"5","501045":"5","501050":"15","501060":"5","501080":"5","501120":"10","501140":"5","502020":"5","502050":"5","502060":"10","502070":"5","502090":"15","502100":"5","502110":"10","502120":"10","502130":"5","502140":"15","502150":"10","503020":"5","503030":"5","503070":"5","503085":"10","503090":"5","503110":"15","503120":"10","503130":"15","504020":"5","504030":"10","504060":"5","504070":"15","504090":"5","504100":"15","504110":"10","504120":"15","504130":"15","504150":"15","509010":"0","509020":"5","509040":"5","509050":"5","509060":"5","509062":"5","509064":"5","509066":"5","509068":"5","509070":"5","509072":"5","509074":"5","509076":"5","601010":"15","601030":"0","601040":"15","601050":"5","601060":"15","601070":"5","601071":"15","601074":"15","601076":"15","601080":"15","601090":"5","601100":"15","601110":"5","601120":"15","601130":"5","601140":"15","601141":"15","601142":"15","601143":"15","601145":"5","601146":"15","601148":"15","601149":"15","601150":"0","601160":"5","601170":"0","601900":"15","601902":"15","601904":"15","601920":"15","601922":"15","601924":"15","601940":"15","601942":"15","601955":"15","601957":"15","603010":"15","603020":"5","603025":"15","603030":"15","603035":"5","603040":"5","603070":"15","603073":"15","603080":"5","608010":"15","608030":"20","608040":"20","608050":"20","608060":"20","608070":"20","608075":"5","608077":"5","608079":"20","608100":"5","608110":"5","609010":"5","609012":"5","609014":"5","609020":"5","609030":"5","609040":"5","609050":"5","609060":"0","609070":"5","609080":"5","609090":"5","609100":"5","609110":"5","609120":"5","609130":"5","609140":"5","609160":"5","609170":"5","609180":"5","609190":"5","611010":"15","613010":"15","613025":"0","613027":"5","688010":"10","688020":"15","688030":"10","688040":"10","688050":"10","688060":"10","688070":"10","688080":"10","688090":"10","688100":"10","688110":"10","688120":"10","688130":"10","688140":"5","688150":"5","688160":"5","688170":"5","688180":"5","688190":"5","688200":"5","688210":"5","688220":"5","688230":"5","688240":"5","688250":"5","692010":"10","692020":"10","692030":"15","692040":"10","692050":"10","692060":"10","692070":"10","692080":"15"};
var missingCardIds = [];
var totalScore = 0; 
var refreshingSemaphore = 0;

var loading = new UI.Card({
  title: 'Grimoire Tracker'
});

loading.on('click',function(e){
  refresh();
});

var missingSectionCount = 0; 

var newMissing = function(){
  var temp = new UI.Menu({
    backgroundColor: 'white',
    textColor: 'black',
    highlightBackgroundColor: 'black',
    highlightTextColor: 'white',
    sections: []
  });
  missingSectionCount = 0; 
  return temp;
};

var missing = newMissing();

var displayMissingCard = function(index,section){
  missing.section(index,section); 
  missing.hide();
  missing.show();
}; 

var callAndProcessGrimoireResponse = function(url,i){
  ajax({url: url + missingCardIds[i], type:'json'},
      function(data) {
        refreshingSemaphore++;
        var response = data.Response;
        
        
        var collected = response.data.cardCollection[0];
        var cStats = collected.statisticCollection; 
        var available; 
        for(var k in response.cardDefinitions) {
          available = response.cardDefinitions[k];
        }
        var aStats = available.statisticCollection;
        
        var sectionName = available.cardName;
        var section = {title: sectionName, items: [] }; 
        for(var j in aStats) {
          if((aStats[j].rankCollection) && (
              (aStats[j].rankCollection.length > 0 && typeof cStats[j].rankCollection == 'undefined') || 
              (aStats[j].rankCollection.length > cStats[j].rankCollection.length))) {
            var aRank = aStats[j].rankCollection;
            var title = cStats[j].value + "/" + aRank[aRank.length-1].threshold;
            console.log(i + ': ' + title + ", " + aStats[j].statName);
            section.items.push({title: title, subtitle: aStats[j].statName});
          }
        }
        
        displayMissingCard(missingSectionCount++,section);
        refreshingSemaphore--;
      }
    );
};

var loadMissingCards = function(){
  for(var i in missingCardIds){
    
    callAndProcessGrimoireResponse(grimoireForSingleCardBaseUrl,i);
    
  }
}; 

var grimoireForAccountUrl = "";
var grimoireForSingleCardBaseUrl = "";

var refresh = function(){
  if(refreshingSemaphore !== 0){
    return;
  }
  
  refreshingSemaphore++;
  
  loading.show();
  
  ajax({url: accountNumberByDisplayNameUrl + displayName + '/', type:'json'},
      function(accountData){
          
      var accountId = accountData.Response; 
      grimoireForAccountUrl = grimoireRestBase + membershipType + "/" + accountId;
        
      ajax({url: grimoireForAccountUrl, type:'json' }, 
        function(data) {
          totalScore = data.Response.data.score;
          var cards = data.Response.data.cardCollection;
          for(var i in cards){
            var card = cards[i];
            if((card.score*1) < (grimoireIds[card.cardId]*1)){
              missingCardIds.push(card.cardId);
            }
          }
          
          grimoireForSingleCardBaseUrl = grimoireForAccountUrl + grimoireSingleToken; 
          console.log(missingCardIds);
          loadMissingCards();
          refreshingSemaphore--;
        }
      );
    }
  );
};

refresh();




