const nonNeutralTerms = ["guys", "boys", "lads", "dudes", "men", "gals", "girls", "women", "ladies"],
    neutralTerms = ["team", "folks", "everyone", "group", "people", "future subjects of our glorious AI overlords", "Switzerland (geddit?)"];


exports.match = (event, commandPrefix) => {
    if (event.arguments.some(a => nonNeutralTerms.includes(a.toLowerCase()))) {
        return true;
    }
    return false;
}

exports.run = (api, event) => {
    const term = api.random(neutralTerms),
        terms = neutralTerms.filter(t => t !== term);
    api.sendMessage("I see you used a non gender netural term in your previous message\nYou could replace it with \"" + term + "\" or any of the following: " + terms.join(", "), event.thread_id);
}
