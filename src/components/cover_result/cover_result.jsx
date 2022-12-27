export default function CoverResult({
    cover
})
{
    return (
        <div>
            {cover.id} {cover.type} {cover.width} {cover.length} {cover.color}
        </div>
    );
}