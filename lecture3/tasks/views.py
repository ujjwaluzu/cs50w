from django.shortcuts import render
from django import forms
tasks = ["yash", "ujjwal", "karan"]
# Create your views here.


class NewFormTask(forms.Form):
    task = forms.CharField(label="New Task")
def index(request):
    return render(request, "tasks/index.html", {
        "tasks":tasks
    })

def add(request):
    if request.method == "POST":
        form = NewFormTask(request.POST)
        if form.is_valid():
            task = form.cleaned_data["task"]
            task.append(task)
    return render(request, "tasks/add.html",{
        "form":NewFormTask()
    })