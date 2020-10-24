import os
from shutil import copyfile

def list_files(dir):
    fileName = ''
    for root, dirs, files in os.walk(dir):
        carpeta = os.path.basename(root)
        if carpeta.isdigit():
            fileName = carpeta
        if len(files) > 0:
            i = 1
            for file in files:
                oldName = root+'\\'+file
                newName = str(fileName) + str(i)
                extension = os.path.splitext(file)[1]
                os.rename(oldName,root+'\\'+newName+'.jpg')
                print('viejo:',root+'\\'+file,'extension:',extension, newName+'.jpg')
                i += 1

        print('-----------------------------------------------------')

def folders():
    count = 0
    for x in range(105,0,-1):
        path = str(x)
        os.makedirs(path)
        seguir = True
        j = 1
        while seguir:
            imagen = str(x) + str(j) + '.jpg'
            if os.path.isfile(imagen) :
                print(imagen)
                count += 1
                copyfile(imagen, path + '/' + imagen)
            else:
                seguir = False
            j += 1
    print('cantidad:',count)




list_files('hierbas')
