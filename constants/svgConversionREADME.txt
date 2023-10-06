npx @svgr/cli --native  --out-dir constants/svgIconSolidComponants -- constants/svgIconsSolid/

npx @svgr/cli --native  --out-dir svgUserAvatarComponants -- svgs





Then run the following as a python script to generate imports and the object dict:
from os import listdir
from os.path import isfile, join


mypath = r"C:\Users\Tunadude09\Projects\Work\Meliora\App\meliora_app_v1\constants\svgIconComponants";
onlyfiles = [f.split(".")[0] for f in listdir(mypath) if isfile(join(mypath, f))];

with open("iconsdir1.txt", "w") as f1:
    with open("iconsdir2.txt", "w") as f2:
        for file in onlyfiles:
            removedHypth = "".join(file.split("-"))
            removedSpaces = "".join(removedHypth.split(" "))
            newFilename = "Svg" + removedSpaces

            f1.write(newFilename + ": <" + newFilename + ' width={"100%"} height={"100%"} viewBox="0 0 512 512" fill={theme.COLORS.BLACK} />, \n');
            f2.write("import " + newFilename + ' from "../../constants/svgIconComponants/' + file + '"\n');




  # "Svg001A": <Svg001A width={"100%"} height={"100%"} viewBox="0 0 512 512" fill={theme.COLORS.BLACK} />