import sys

if len(sys.argv) != 2:
    print("Usage: python script.py <filename>")
    sys.exit()

filename = sys.argv[1]

with open(filename, 'r') as file:
    lines = file.readlines()

for lineidx in range(len(lines)):
    line = lines[lineidx]
    if line.startswith('<ul data-component="poll"'):
        linedata = line.split(' ')
        idsegment = linedata[2]
        if "'" not in idsegment:
            print("Fixing line: " + line)
            idsegments = idsegment.split('=')
            idsegments[1] = "'" + idsegments[1] + "'"
            idsegment = '='.join(idsegments)
            linedata[2] = idsegment
            line = ' '.join(linedata)
            lines[lineidx] = line
            print("Fixed line: " + line)
            
with open(filename, 'w') as file:
    file.writelines(lines)