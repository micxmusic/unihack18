# Generated by Django 2.0.7 on 2018-07-28 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ingredients', '0004_auto_20180728_2048'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipeingredient',
            name='amount',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
