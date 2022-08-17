function navigate_back()
{
    save_packet_info();
    type = retrieve('cover-type');
    window.location.pathname = '/src/pages/configure/' + type + '/index.html';
}

function navigate_forward()
{
    save_packet_info();
    window.location.pathname = '/src/pages/result/index.html';
}

function save_packet_info()
{
    tie_downs_count = 
    parseInt(document.getElementById("tie-downs").value);

    cables_count = 
    parseInt(document.getElementById("cables").value);

    quicklinks_count =
    parseInt(document.getElementById("quicklinks").value);

    other_count =
    parseInt(document.getElementById("other-count").value);

    other_name =
    document.getElementById("other-name").value;

    let packet = new Packet(
        tie_downs_count,
        cables_count,
        quicklinks_count,
        other_count,
        other_name);

    save('packet', packet);
}

function loadPacketInfo()
{
    packet = retrieve('packet');
    
    document.getElementById("tie-downs").value = 
    packet.tie_downs_count | 0;

    document.getElementById("cables").value =
    packet.cables_count | 0;

    document.getElementById("quicklinks").value =
    packet.quicklinks_count | 0;

    document.getElementById("other-count").value =
    packet.other_count | 0;

    document.getElementById("other-name").value =
    packet.other_name;

    if (packet.other_name == "Other")
    {
        document.getElementById("other-name").value = "";
    }
}

function clear_form()
{
    document.getElementById("tie-downs").value = 0;

    document.getElementById("cables").value = 0;

    document.getElementById("quicklinks").value = 0;

    document.getElementById("other-count").value = 0;

    document.getElementById("other-name").value = "";
}