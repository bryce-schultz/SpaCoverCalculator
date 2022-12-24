class Packet
{
    tie_downs_count;
    cables_count;
    quicklinks_count;
    other_count;
    other_name = 'Other';

    constructor(tie_downs_count,
        cables_count,
        quicklinks_count,
        other_count,
        other_name)
    {
        this.tie_downs_count = tie_downs_count;
        this.cables_count = cables_count;
        this.quicklinks_count = quicklinks_count;
        this.other_count = other_count;
        if (other_name == 0) 
            this.other_name = 'Other';
        else
            this.other_name = other_name;
    }
}