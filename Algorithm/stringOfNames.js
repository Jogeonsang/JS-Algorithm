/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

    Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
 */

// my solution
function list(names){
    let len = names.length;
    if (len === 0) return ''
    return names.slice(0, len -1).map(p => p.name).join(', ') + (len > 1 ?  ' & ' : '') + names[len -1].name
}

// other solution

function list(names) {
    let xs = names.map(p => p.name)
    let x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
}