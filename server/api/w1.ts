import ds18b20 from 'ds18b20';

export default defineEventHandler(() => 
{

    ds18b20.sensors(function(err, ids) {
        ids.forEach(element => {
            console.log(element)
                ds18b20.temperature(element, {parser: 'hex'}, function(err, value) {
                console.log('Current temperature is', value);
            });
        });
    });
    
    return 'hell'
});
  
