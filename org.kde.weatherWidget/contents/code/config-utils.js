function getTownStringArray() {
    var cfgTownStrings = plasmoid.configuration.townStrings
    print('Reading townStrings from configuration: ' + cfgTownStrings)
    return JSON.parse(cfgTownStrings)
}
