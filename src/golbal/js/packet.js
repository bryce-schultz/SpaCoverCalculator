class Packet
{
    tie_downs_count;
    cables_count;
    quicklinks_count;
    other_count;
    other_name;

    constructor(tie_downs_count,
        cables_count,
        quicklinks_count,
        other_count,
        other_name,)
    {
        this.tie_downs_count = tie_downs_count;
        this.cables_count = cables_count;
        this.quicklinks_count = quicklinks_count;
        this.other_count = other_count;
        this.other_name = other_name;
    }
}