import * as json2csv from "json2csv";
import * as uuid from 'uuid';
import * as fs from 'fs';

const fields = ['_id', 'nome','email','password','perfil']
const opts = {fields};

class ExportFile {

    tocsv = async function (logins){
        try{
            const csv = json2csv.parseAsync(logins, opts);
            const filename = uuid.v4() + ".csv";
            fs.writeFile(`./exports/${filename}`, await csv, function(err){
                if(err) throw err;
                console.log('arquivo salvo com sucesso.')
            });

            return filename;

        }catch(error){
            console.error(error);
        }
    }
}

export default new ExportFile();

