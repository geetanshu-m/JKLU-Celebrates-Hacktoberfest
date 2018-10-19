import os
data = os.listdir("data/")
nodes = "["
for file in data:
    x = open("data/"+str(file),"r").read().strip()
    nodes = nodes + x + ",\n"
nodes = nodes[:-2]
nodes = nodes + "]"
arr = open("data.arr","w+")
arr.write(str(nodes))
arr.close