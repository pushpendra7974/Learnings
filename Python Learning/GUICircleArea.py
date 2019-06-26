from tkinter import *

def calculate():
    var2 = var1.get()    
    var3 = 3.142*var2*var2
    e2.insert(0,var3)

def delete():
    e1.delete(0,END)
    e2.delete(0,END)

root = Tk()
root.title ('Area of Circle')

var1 = IntVar()

Label(text='Area of Circle', padx=10, font={'arial',30,'bold'}).grid(row=0,column=1)

Label(text='Radius', padx=10, font={'arial',30,'bold'}).grid(row=1,sticky=W)
e1 = Entry(width=30, font={'arial',30,'bold'},textvariable=var1)
e1.grid(row=1,column=1)

Label(text='Area', padx=10, font={'arial',30,'bold'}).grid(row=2,sticky=W)
e2 = Entry(width=30, font={'arial',30,'bold'})
e2.grid(row=2,column=1)

Button(text='Calculate', font={'arial',30,'bold'},width=14,command=calculate).grid(row=3,column=1,stick=W)
Button(text='Clear', font={'arial',30,'bold'},width=14,command=delete).grid(row=3,column=1,sticky=E)
root.mainloop()