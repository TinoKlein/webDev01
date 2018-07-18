module.exports = {
    split2li: (string, param) => {
        let list = "";
        let s = string.split(",");
        for(let i = 0; i < s.length; i++){
            if(param === "floors") {
                if(!isNaN(s[i])) {
                    list += "<li>" + s[i] + ". Floor</li>";
                }else{
                    list += "<li>" + s[i] + "</li>";
                }
            }else if(param === "rooms"){
                list += "<li>" + s[i] + "</li>";
            }
        }

        return list;
    },

    getdate: (timestamp) => {
        let ts = new Date(timestamp*1000);
        let mm = ts.getMonth() + 1;
        let dd = ts.getDate();
        var yy = ts.getFullYear();

        if(dd < 10){ dd = "0" + dd; };
        if(mm < 10){ mm = "0" + mm; };

        let date = dd + "." + mm + "." + yy;

        return date;
    },

    incIndex: (index) => {
        index++;

        return index;
    },

    strReplace: (str) => {
        let newStr = str.replace(" ", "_");

        return newStr;
    },

    setActiveTab: (index) => {
        if(index === 0){
            return "active";
        }
    },

    ifFloor: (floorIDext, floorID) => {
        if(floorID === floorIDext){
            return "active";
        }
    }


}
