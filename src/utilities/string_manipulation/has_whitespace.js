export default function hasWhiteSpace(string) 
{
    var re_white_space = new RegExp("/^\s+$/");

    if (re_white_space.test(string)) {
        return false;
    }

    return true;
}