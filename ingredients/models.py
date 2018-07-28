from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Type(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text


class Diet(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=255)
    exclusion = models.ManyToManyField(Type)

    def __str__(self):
        return self.text


class ValidIngredient(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    UNIT_CHOICES = (('ea', 'item'), ('ml', 'millilitre'), ('g', 'grams'))
    units = models.CharField(choices=UNIT_CHOICES, max_length=2)
    classification = models.ManyToManyField(Type)

    def __str__(self):
        return self.name


class UserIngredient(models.Model):
    id = models.AutoField(primary_key=True)
    belongs_to = models.ForeignKey(User, on_delete=models.PROTECT)
    ingredient = models.ForeignKey(ValidIngredient, on_delete=models.PROTECT)
    amount = models.IntegerField(null=True)
    expiry = models.DateField(null=True)

    def __str__(self):
        return self.ingredient.name


class Recipe(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField()

    def __str__(self):
        return self.name


class RecipeIngredient(models.Model):
    id = models.AutoField(primary_key=True)
    belongs_to = models.ForeignKey(Recipe, on_delete=models.PROTECT)
    ingredient = models.ForeignKey(ValidIngredient, on_delete=models.PROTECT)
    amount = models.IntegerField()

    def __str__(self):
        return (self.belongs_to.name + " contains " + self.ingredient.name)
