import os
import json
from pathlib import Path


def load_dictionary(user):
    xml_path = os.path.join(Path(__file__).parent, 'dict')
    xml_file = os.path.join(xml_path, user.username + '.json')
    with open(xml_file) as json_file:
        data = json.load(json_file)
        user.profile.dictionary = json.dumps({key.lower(): value.lower().replace(';', ',') for key, value in data.items()})
        user.save()

