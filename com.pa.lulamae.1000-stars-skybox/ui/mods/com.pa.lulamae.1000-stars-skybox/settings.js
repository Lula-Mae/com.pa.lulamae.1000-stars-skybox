try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: '1000 Points of Light by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.1000-stars-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}