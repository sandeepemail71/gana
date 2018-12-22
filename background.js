
var browser = browser || chrome;
var queryInfo = {};
queryInfo.url = "https://gaana.com/"
var t;
let tabs = browser.tabs.query(
    queryInfo, (x) => {
        console.log(x);
        chrome.commands.onCommand.addListener(function (command) {

            var tmp = ""
            if (command === "next_key") {
                try {
                    tmp = 'document.getElementsByClassName("next-song")[0].click()';
                    browser.tabs.executeScript(x[0].id, {
                        "code": tmp
                    });
                }
                catch (error) {
                    console.log(error);
                }
            }
            if (command === "prev_key") {
                try {
                    tmp = 'document.getElementsByClassName("prev-song")[0].click()';
                    browser.tabs.executeScript(x[0].id, {
                        "code": tmp
                    });
                } catch (error) {
                    console.log(error);
                }
            }
            if (command === "playPause_key") {
                try {
                    tmp = 'document.getElementsByClassName("play-song")[0].click()';
                    browser.tabs.executeScript(x[0].id, {
                        "code": tmp
                    });
                }
                catch (error) {
                    console.log(error);
                }
            }

        });
    }
);

