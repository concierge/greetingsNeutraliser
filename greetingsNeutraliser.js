const nonNeturalTerms = ["guys", "boys", "lads", "dudes", "men", "gals", "girls", "women", "ladies"],
    neturalTerms = ["team", "y’all", "folks", "everyone", "group", "future subjects of our glorious AI overlords"];


exports.match = (event, commandPrefix) => {
    if (new RegExp(nonNeturalTerms.join("|"), "i").test(event.body)) {
        return true;
    }
    return false;
}

exports.run = (api, event) => {
    let terms = neturalTerms,
        index = Math.floor(Math.random() * terms.length),
        term = terms.splice(index, 1);
    api.sendMessage("I see you used a non gender netural term in your previous message\nYou could replace it with \"" + term + "\" or any of the following: " + terms.join(", "), event.thread_id);
}
