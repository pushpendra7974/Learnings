from tkinter import *

counter = 0

def digit_counter(myLabel):
    counter =0

    def digit():
        global counter
        counter +=1
        myLabel.config(text=str(counter))
        myLabel.after(1000,digit)
    digit()

root = Tk()
root.title('Digit Counter')
myLabel = Label(fg='red',font=100)
myLabel.pack()
digit_counter(myLabel)
btn = Button(text='Terminate',width=50,command=root.destroy)
btn.pack()
root.mainloop()