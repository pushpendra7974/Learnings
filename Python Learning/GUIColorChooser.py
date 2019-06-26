from tkinter import *
from tkinter.colorchooser import *

root = Tk()
root.geometry('250x100')

def mycolor():
    color = askcolor()
    mylabel = Label(text='This is your preferred color', bg=color[1]).pack()
    print(color)

btn = Button(text ='Chose color', command=mycolor).pack()

root.mainloop()
