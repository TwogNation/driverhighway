var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}



const scriptsInEvents = {

		async Global_sht_Event81_Act2(runtime, localVars)
		{
			postText(runtime.globalVars.finalScore)
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

