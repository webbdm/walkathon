var Walk = (function() {

    var info = { name: "", email: "", pledge: "", interval: "" };
    var newDonors = [];

    return {
        getInfo: function() {
            return info;
        },

        addDonor: function(info) {

            info.name = walkerName.value;
            info.email = email.value;
            info.pledge = pledge.value;
            info.interval = getRadioValue();
            newDonors.push(info);

            var mainTable = document.getElementById('tableBody');
            var newRow = "";
            newRow += '<tr>'
            newRow += '<td>' + newDonors[0].name + '</td>';
            newRow += '<td>' + newDonors[0].email + '</td>';
            newRow += '<td>' + newDonors[0].pledge + '</td>';
            newRow += '<td>' + newDonors[0].interval + '</td>';
            newRow += '</tr>'
            mainTable.innerHTML += newRow;
        }
    }
})();
